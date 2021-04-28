import { createReactApp } from './ports/dom'
import { worker } from './mock_server/browser'

worker.start()
  .catch(err => console.error(err))

createReactApp()


