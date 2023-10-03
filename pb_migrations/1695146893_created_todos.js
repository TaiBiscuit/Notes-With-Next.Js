/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lyi2ud9b96joi9m",
    "created": "2023-09-19 18:08:13.816Z",
    "updated": "2023-09-19 18:08:13.816Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hbch8mjr",
        "name": "text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hqd4edij",
        "name": "date",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lyi2ud9b96joi9m");

  return dao.deleteCollection(collection);
})
