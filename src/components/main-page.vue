<template>
  <div>
    <h2 class="first-table report">Final report</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Label</th>
          <th>Quantidade de ações</th>
          <th>Posição de abertura total</th>
          <th>Posição atual total</th>
          <th>Ganho de capital total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in req" :key="index">
          <td>{{ item.category }}</td>
          <td>{{ item.label }}</td>
          <td>{{ item.sharesQuantity }}</td>
          <td>{{ formatNumber(item.totalOpeningPosition) }}</td>
          <td>{{ formatNumber(item.totalCurrentPosition) }}</td>
          <td>{{ formatNumber(item.totalCapitalGain) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="table-container">
      <div v-for="item in req" :key="item.category" class="table-column">
        <h2 class="title">{{ item && item.category ? item.category : "" }}</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Nome</th>
              <th>Cotações Totais</th>
              <th>Atualizado em</th>
              <th>Fechamento</th>
              <th>Posição Atual</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="share in item.shares" :key="share.symbol">
              <td>{{ formatNumber(share.symbol) }}</td>
              <td>{{ formatNumber(share.longName) }}</td>
              <td>{{ formatNumber(share.totalQuotas) }}</td>
              <td>{{ formatNumber(share.updatedAt) }}</td>
              <td>{{ formatNumber(share.close) }}</td>
              <td>{{ formatNumber(share.currentPosition) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  background: #ccc;
}

.report {
  text-align: center;
}

.first-table {
  margin-top: 50px;
}

.title {
  text-align: center;
}

.table-container {
  margin-top: 50px;
  display: flex;
}

.table-column {
  flex: 1;
  margin-right: 20px;
}

.table {
  background: #bbc5d8;
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.table th {
  background-color: #313131;
  color: #fff;
  font-weight: 200;
  font-weight: bold;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      req: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/see-earnings");
      this.req = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    formatNumber(value) {
      if (typeof value !== "number") {
        return value;
      }

      const options = {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };

      return value.toLocaleString("pt-BR", options);
      // if (typeof value === "number") {
      //   if (typeof value === "number") {
      //     const options = {
      //       minimumFractionDigits: 2,
      //       maximumFractionDigits: 2,
      //     };
      //     return value.toLocaleString("pt-BR", options);
      //   }
      //   return value;
      // }
      // return value;
    },
  },
};
</script>
