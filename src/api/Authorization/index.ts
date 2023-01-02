import request from '@/config/axios'

/**
 * 获取管理员列表
 * @returns
 */
export const getAdminListApi = (params): Promise<IResponse> => {
  return request.get({ url: '/backend/admin/list', params })
}
