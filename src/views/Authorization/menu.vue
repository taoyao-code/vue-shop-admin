<script setup lang="ts">
import { ref, h } from 'vue'

import { ContentWrap } from '@/components/ContentWrap'
import { Table } from '@/components/Table'
import { ElButton } from 'element-plus'

import { useI18n } from '@/hooks/web/useI18n'
import { TableColumn, TableSlotDefault } from '@/types/table'

const { t } = useI18n()

const columns: TableColumn[] = [
  {
    field: 'index',
    label: t('userDemo.index'),
    type: 'index'
  },
  {
    field: 'name',
    label: t('userDemo.username'),
    type: 'index'
  }
]
</script>

<template>
  <ContentWrap :title="t('userDemo.title')" :message="t('userDemo.message')">
    <Table :columns="columns" :data="tableDataList" :loading="loading" :selection="false">
      <template #action="data">
        <ElButton type="primary" @click="actionFn(data as TableSlotDefault)">
          {{ t('tableDemo.action') }}
        </ElButton>
      </template>
    </Table>
  </ContentWrap>
</template>

<style scoped></style>
