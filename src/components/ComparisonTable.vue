<template>
    <section class="comparison">
      <!-- Desktop / Tablet：表格 -->
      <div class="d-none d-sm-block">
        <v-table class="comp-table" density="comfortable" hover>
          <thead>
            <tr>
              <th class="w-30"></th>
              <th v-for="col in columns" :key="col.key" class="text-center font-weight-bold">
                <slot :name="`col-${col.key}`">
                  {{ col.label }}
                </slot>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.key">
              <td class="row-label font-weight-medium">{{ row.label }}</td>
              <td v-for="col in columns" :key="col.key" class="text-body-2">
                <slot :name="`cell-${row.key}-${col.key}`">
                  {{ data[row.key]?.[col.key] || '—' }}
                </slot>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
  
      <!-- Mobile：卡片堆疊 -->
      <div class="d-sm-none">
        <v-row dense>
          <v-col v-for="col in columns" :key="col.key" cols="12">
            <v-card rounded="xl" elevation="1">
              <v-card-title class="py-3 text-center font-weight-bold">
                <slot :name="`col-${col.key}`">
                  {{ col.label }}
                </slot>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <div v-for="row in rows" :key="row.key" class="mb-3">
                  <div class="text-caption text-medium-emphasis mb-1">{{ row.label }}</div>
                  <div class="text-body-2">
                    <slot :name="`cell-${row.key}-${col.key}`">
                      {{ data[row.key]?.[col.key] || '—' }}
                    </slot>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
  </template>
  
  <script setup>
  /**
   * props:
   * - columns: [{ key:'tw', label:'台灣巨大樹地圖' }, ...]
   * - rows:    [{ key:'purpose', label:'用途' }, ...]
   * - data:    { purpose:{tw:'…', seek:'…', treeva:'…', us:'…'}, ... }
   */
  defineProps({
    columns: { type: Array, required: true },
    rows: { type: Array, required: true },
    data: { type: Object, required: true },
  })
  </script>
  
  <style scoped>
  .comparison :deep(table) {
    border-collapse: separate;
    border-spacing: 0;
  }
  .comp-table thead th,
  .comp-table tbody td,
  .comp-table tbody .row-label {
    border-bottom: 1px solid var(--v-theme-outline-variant);
  }
  .comp-table thead th:first-child,
  .comp-table tbody td:first-child,
  .comp-table tbody .row-label {
    border-right: 1px solid var(--v-theme-outline-variant);
  }
  .comp-table thead th,
  .comp-table tbody td {
    padding: 12px 14px;
    vertical-align: top;
  }
  .row-label {
    width: 9rem;
    background: rgba(0,0,0,.03);
  }
  @media (prefers-color-scheme: dark) {
    .row-label { background: rgba(255,255,255,.04); }
  }
  </style>
  