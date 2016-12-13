/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  upsert
 * PATCH   /api/things/:id          ->  patch
 * DELETE  /api/things/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Items from './items.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Things
export function index(req, res) {
  return Items.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Items from the DB
export function show(req, res) {
  return Items.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function editPrice(req, res) { 
  console.log(req);
  return Items.findOneAndUpdate({_id: req.params.id}, {$set:{price: req.params.price}}).exec()
    .then(handleEntityNotFound(res))
    .catch(handleError(res));
}


export function markSold(req, res) { 
  return Items.findOneAndUpdate({_id: req.params.id}, {$set:{isSold:true}}).exec()
    .then(handleEntityNotFound(res))
    .catch(handleError(res));
}

// Creates a new Items in the DB
export function create(req, res) {
  return Items.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Items in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Items.findOneAndUpdate(req.params.id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Items in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Items.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Items from the DB
export function destroy(req, res) {
  return Items.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
