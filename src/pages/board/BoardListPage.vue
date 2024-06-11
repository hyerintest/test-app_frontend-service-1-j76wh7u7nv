<template>
  <q-card ref="mainPageComponent" tile class="overflow-hidden" height="100%">
    <div class="page">
      <div class="page-header-wrapper">
        <div class="app-g-title">게시글 작성</div>
        <div class="header-btn-group">
          <q-btn
              class="app-g-btn"
              color="primary"
              router
              :to="{ name: 'BoardCreatePage' }"
              exact
          >
            작성하기
          </q-btn>
        </div>
      </div>
      <div class="page-contents-wrapper">
        <q-table
            row-key="label"
            :columns="tableHeaders"
            :rows="contents"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                <router-link
                    :to="'/board/detail/' + props.row.id"
                    class="template-title-length"
                >{{ props.row.title }}
                </router-link>

              </q-td>
              <q-td>
                {{ props.row.contents }}
              </q-td>
              <q-td>
                {{ props.row.createDate }}
              </q-td>
              <q-td>
                <q-btn
                    class="app-g-btn btn-small"
                    color="deep-orange"
                    @click="onDelete(props.row.id )"
                >
                  삭제
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-card>
</template>
<script>
import StorageService from '../../service/storageService';

export default {
  name: 'BoardListPage',
  data: () => ({
    tableHeaders: [
      {
        label: '제목',
        align: 'center',
        sortable: true,
        field: 'title',
      },
      {
        label: '내용',
        align: 'center',
        sortable: false,
        field: 'contents',
      },
      {
        label: '날짜',
        align: 'center',
        sortable: false,
        field: 'createDate',
      },
      {
        label: 'Actions',
        align: 'center',
        sortable: false,
        field: 'action',
      },
    ],
    contents: [],
  }),
  methods: {
    onDelete(cid) {
      StorageService.delete(cid)
      this.contents = StorageService.list();
    }
  },
  mounted() {
    this.contents = StorageService.list();
  }
}
</script>
<style lang="scss">
.page {
  .page-header-wrapper {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    .app-g-title {
      padding-top: 6px;
    }
  }
}
</style>
