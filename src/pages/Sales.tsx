import { useEffect } from 'react'
import { Home } from './Home'

const SCRIPT_ID = 'leadconnector-chat-widget'

export function Sales() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
    )
    script.setAttribute('data-widget-id', '6aac0b52136b4b08268f0959')
    script.setAttribute('data-source', 'WEB_USER')
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <Home />
}
