<template>
  <ul class="history">
    <li v-for="(item, index) in historyList" :key="index" class="dialogborder">
      <div class="part">
        <div v-if="eHistory" class="msg-item">
          <i>操作日期：</i><span v-text="item.dates" />
        </div>
        <div v-if="eHistory" class="msg-item">
          <i class="name">操作人：</i><span v-text="item.name" />
        </div>
        <div v-if="eHistory" class="msg-item">
          <i>机构简称：</i><span v-text="item.abbr_cnames" />
        </div>
        <div v-if="eHistory" class="msg-item">
          <i>修改项目：</i><span v-text="item.update_project" />
        </div>
        <div v-if="eHistory" class="msg-item">
          <i>删除项目：</i><span v-text="item.del_project" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        historyList: [{
            dates: '2020-09-13',
            name: '张静',
            abbr_cnames: 'IDG资本',
            update_project: '机构名称、官方网站',
            del_project: '11',
          },
          {
            dates: '2020-09-13',
            // name: '',
            abbr_cnames: 'IDG资本',
            update_project: '机构名称、官方网站',
          },
          {
            dates: '2020-09-13',
            name: '张静',
            abbr_cnames: 'IDG资本',
          }
        ]
      }
    }
  }
</script>

<style>
</style>
