const SPACE_ID = 'hx81nuoo3d0f'

const headers = new Headers()
headers.append('Authorization', 'Bearer lBODsLUyn6E5o4TF4_4I0FPF7ZCNezE3ww3fewddHlY')

const options = {
  method: 'GET',
  headers
}

export async function list () {
  const response = await fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`, options)

  return response.status === 200 ? response.json() : null
}
