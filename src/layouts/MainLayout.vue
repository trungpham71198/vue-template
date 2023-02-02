<template>
  <a-layout class="main-layout">
    <div>
      <Button />
      <router-view />
    </div>
  </a-layout>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.main-layout {
  .ant-layout-sider {
    flex: 0 0 0;
    max-width: 96px !important;
    min-width: 96px !important;
    width: 96px !important;
    border-right: #e1e1e1 1px solid;
  }
}
</style>
