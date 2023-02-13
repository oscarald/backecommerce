import Sale from "../server/models/Sale.js";

const createSales = async (req,res) => {
  const {customer,cart,amount,id} = req.body
  try {
    const sale = await Sale.create({customer,cart,amount, client : id});

    return res.json({message: "Venta completada correctamente"})
  } catch (error) {
    return res.json(error.message)
  }
}

const changeStatus = async (req, res) => {
  const{id,status} = req.body

  try {
    const sale = await Sale.findOneAndUpdate({_id:id},{status}, {new: true})
    res.send(sale)

  } catch (error) {
    return res.json(error.message)
  }
  
}

const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find()
    res.send(sales)
  } catch (error) {
    return res.json(error.message)
  }
}

export {createSales, changeStatus, getAllSales}