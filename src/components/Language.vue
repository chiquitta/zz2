<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span>
      <i class="las la-globe la-2x"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh-cn">繁體中文</el-dropdown-item>
      <el-dropdown-item command="zh-cn">简体中文</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Language2',
  data() {
    return {
      langList: {
        'zh-cn': '简体',
        'zh-tw': '繁体',
        en: 'English',
      },
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
    title() {
      return this.langList[this.lang];
    },
  },
  methods: {
    ...mapMutations('app', [
      'setLocal',
    ]),
    handleCommand(command) {
      this.setLocal(command);
      this.$i18n.locale = command;
    },
  },
};
</script>
