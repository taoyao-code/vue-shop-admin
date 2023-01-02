<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Table } from '@/components/Table'
import { UserType } from '@/api/login/types'
import { ref, h } from 'vue'
import { ElButton } from 'element-plus'
import { TableColumn, TableSlotDefault } from '@/types/table'

import { getAdminListApi } from '@/api/Authorization'

interface Params {
  pageIndex?: number
  pageSize?: number
}

const { t } = useI18n()

let tableDataList = ref<[]>([])
const loading = ref(true)

const getTableList = async (params?: Params) => {
  const res = await getAdminListApi({
    params: params || {
      page: 1,
      limit: 20
    }
  })

  if (res) {
    tableDataList.value = res.data.list
    loading.value = false
  }
}

const columns: TableColumn[] = [
  {
    field: 'index',
    label: t('admin.index'),
    type: 'index'
  },
  {
    field: 'name',
    label: t('admin.username')
  },
  {
    field: 'is_admin',
    label: t('admin.is_admin')
  },
  {
    field: 'remark',
    label: t('Role.remark'),
    formatter: (row: UserType) => {
      return h(
        'span',
        row.username === 'admin' ? t('Role.remarkMessage1') : t('Role.remarkMessage2')
      )
    }
  },
  {
    field: 'action',
    label: t('Role.action')
  }
]

getTableList()

const actionFn = (data: TableSlotDefault) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap :title="t('admin.title')" :message="t('admin.message')">
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
