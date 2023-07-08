import { createClient } from '../src/prismicio';

let client
if (!client) {
   client = createClient()
}

export default client