<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
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
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
//      vnodes.push(<svg-icon icon-class={icon}/>)
      vnodes.push(<span class={'icon iconfont sidebar-icon ' + icon}></span>)
    }

    if (title) {
      vnodes.push(<span class='sidebar-item-text' slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
