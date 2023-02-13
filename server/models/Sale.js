import mongoose from "mongoose";

const saleSchema = mongoose.Schema(
  {
    customer: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    cart: {
      type: Object,
      required: true,
    },
    status :{
      type: String,
      required: true,
      default: "Pendiente"
    },
    client:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema);
export default Sale;