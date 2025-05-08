import { reactive, computed, isRef } from 'vue'
import { useHead } from '@vueuse/head'

export function usePageHead({ title, description = '', keywords = [] }) {
  const siteData = reactive({
    title: computed(() => `GRMI | ${isRef(title) ? title.value : title}`),
    description,
    keywords: computed(() => {
      if (Array.isArray(keywords)) {
        return keywords.join(', ')
      }
      return keywords
    }),
  })

  useHead({
    title: siteData.title,
    meta: [
      {
        name: 'description',
        content: siteData.description,
      },
      {
        name: 'keywords',
        content: siteData.keywords,
      },
    ],
  })
}
