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
              :to="{ name: 'BoardListPage' }"
              exact
          >
            목록으로
          </q-btn>
          <q-btn
              class="app-g-btn"
              color="primary"
              exact
              @click="save()"
          >
            등록
          </q-btn>
        </div>
      </div>

      <div class="page-contents-wrapper">
        <div class="app-g-info-contents">
          <q-form ref="form" v-model="valid" lazy-validation>
            <q-row class="info-contents-row">
              <q-col class="info-contents-col">
                <q-input
                    class="app-g-text-field"
                    height="49px"
                    outlined
                    v-model="boardData.title"
                    label="제목"
                    maxlength="100"
                    required
                ></q-input>
              </q-col>
            </q-row>
            <q-row class="info-contents-row">
              <q-col class="info-contents-col">
                <q-input
                    type="textarea"
                    class="app-g-textarea"
                    outlined
                    label="내용"
                    :maxlength="3000"
                    v-model="boardData.contents"
                    required
                    rows="30"
                    row-height="30"
                ></q-input>
              </q-col>
            </q-row>
          </q-form>
        </div>
      </div>
    </div>
  </q-card>
</template>
<script>
import StorageService from '../../service/storageService';
import router from "../../router/index";

export default {
  name: 'BoardCreatePage',
  data: () => ({
    valid: true,
    boardData: {
      title: '',
      contents: '',
    }
  }),
  methods: {
    save() {
      const param = {...this.boardData};
      StorageService.create(param);
      router.push({name: 'BoardListPage'}).catch(err => err);
    }
  },
  mounted() {
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

    .header-btn-group {
      .app-g-btn:not(:last-child) {
        margin-right: 6px;
      }
    }
  }
}
</style>
