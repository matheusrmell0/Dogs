export const API_URL = 'https://dogsapi.origamid.dev/json';

// Faz um POST na API do token de autorização do usuario para verificar o status da conta
export function TOKEN_POST(body) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// Faz um POST na API para validar o token de autorização do usuario
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

// Faz um GET da API para pegar o token de autorização do usuario
export function GET_USER(token) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

// Faz um POST API os dados do novo usuario cadastrado
export function USER_POST(body) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// Manda pra API um constructor formData com a imagem upada e os campos de dados
export function PHOTO_POST(formData, token) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

// Faz um GET das fotos salvas na API atráves de um objeto com o número de páginas, total de fotos e o id do usuario
export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

// Faz um GET da foto especifica na API através id dela
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

// Manda pra API o id do usuario, comentario e token para validação
export function COMMENT_POST(id, comment, token) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    },
  };
}
