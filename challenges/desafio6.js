db.produtos.find({ $and: [
    { curtidas: { $lt: 100 } },
    { curtidas: { $gt: 10 } },
] },
    { nome: 1, curtidas: 1, _id: 0 });