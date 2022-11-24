<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    newTime: {
      type: Date,
      default: new Date()
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title, newTime } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      if (newTime && newTime.getTime() > new Date().getTime()) {
        vnodes.push(<span slot='title'>{(title)}<span style='color: red;display: inline-block;margin-top: -10px;padding:0 5px;'>NEW!</span></span>)
      } else {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  width: 1em;
  height: 1em;
  color: currentColor;
}
</style>
