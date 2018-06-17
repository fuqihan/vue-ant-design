<template>
    <button :type="htmlType" :class="classNames" :disabled="loading" @click="handleClick">
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
const propType = {
  htmlType: ["submit", "button", "reset"],
  shape: ["", "circle", "circle-outline"],
  size: ["large", "default", "small"],
  type: ["", "primary", "dashed", "danger"]
};
const prefixCls = "ant-btn";

export default {
  props: {
    type: {
      default: "",
      validator: function(val) {
        return propType.type.indexOf(val) > -1;
      }
    },
    htmlType: {
      default: "button",
      validator: function(val) {
        return propType.htmlType.indexOf(val) > -1;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    shape: {
      default: "",
      validator: function(val) {
        return propType.shape.indexOf(val) > -1;
      }
    },
    size: {
      default: "default",
      validator: function(val) {
        return propType.size.indexOf(val) > -1;
      }
    },
    className: {
      default: function() {
        return [];
      }
    },
    onClick: {
      type: Function
    }
  },
  computed: {
    classNames: function() {
      let cls = [prefixCls];
      let sizeCls = "default";
      switch (this.$props.size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
        default:
          break;
      }
      if (this.$props.type) cls.push(`${prefixCls}-${this.$props.type}`);
      if (this.$props.shape) cls.push(`${prefixCls}-${this.$props.shape}`);
      if (this.$props.loading) cls.push(`${prefixCls}-loading`);
      cls.push(`${prefixCls}-${sizeCls}`);
      return cls.concat(this.$props.className);
    }
  },
  methods: {
    handleClick(e) {
      try {
        if (this.$props.loading) return;
        //   this 指向不对
        this.$props.onClick(e);
      } catch (error) {}
    }
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>

