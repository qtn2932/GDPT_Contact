const knex= require('knex');
const knexConfig= require('../knexfile.js');
const db= knex(knexConfig.development);

module.exports={
    find,
    findByName,
}

function find(table){
    return db(table);
}

function findByName(table, searchParams){
    return db(table)
    .where(table.FullName).like(searchParams)
}
