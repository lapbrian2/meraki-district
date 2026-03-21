const searchOpen = ref(false)

export function useArchivalSearch() {
  function open() {
    searchOpen.value = true
  }

  function close() {
    searchOpen.value = false
  }

  function toggle() {
    searchOpen.value = !searchOpen.value
  }

  return { isOpen: searchOpen, open, close, toggle }
}
