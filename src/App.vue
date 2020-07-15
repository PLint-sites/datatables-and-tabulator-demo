<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Sorting Tables in a Vue CLI 3 project</h1>
    <p>
      I was wondering how to use sorting plugins for the well-known Datatables plugin. Therefore, 
      I implemented this simple demo. However, a few days later I read about the Tabulator project 
      and found out it had support for Vue, so I thought let's try it out too!
    </p>
    <h2>Sorting with Datatables</h2>
    <small>Note that the Datatables plugin depends on jQuery!</small>
    <sortable-datatable></sortable-datatable>
    <h2>Sorting using Tabulator</h2>
    <sortable-tabulator></sortable-tabulator>
    <h2>Sorting using Gridjs.io</h2>
    <sortable-grid></sortable-grid>
  </div>
</template>

<script>
import SortableDatatable from './components/SortableDatatable'
import SortableTabulator from './components/SortableTabulator'
import SortableGrid from './components/SortableGrid'
export default {
  name: 'app',
  components: {
    SortableDatatable,
    SortableTabulator,
    SortableGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
