db.produtos.find({ $and: [
    { vendidos: { $lt: 100 } },
    { vendidos: { $gt: 50 } },
] },
    { nome: 1, vendidos: 1, _id: 0 })
.sort({ vendidos: 1 });