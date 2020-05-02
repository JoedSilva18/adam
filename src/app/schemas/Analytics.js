import mongoose from 'mongoose';

const AnalyticsSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    freteEPrazo: {
      type: Number,
      required: false,
      default: 0,
    },
    formaPagamento: {
      type: Number,
      required: false,
      default: 0,
    },
    NFEGarantia: {
      type: Number,
      required: false,
      default: 0,
    },
    originalidade: {
      type: Number,
      required: false,
      default: 0,
    },
    caracteristicasProduto: {
      type: Number,
      required: false,
      default: 0,
    },
    disponibilidade: {
      type: Number,
      required: false,
      default: 0,
    },
    SPAM: {
      type: Number,
      required: false,
      default: 0,
    },
    naoIdentificado: {
      type: Number,
      required: false,
      default: 0,
    },
    total: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Analytics', AnalyticsSchema);
