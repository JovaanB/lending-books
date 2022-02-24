import { getToken } from "./token";

const mockSuccess = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 1500);
  });
};

const mockFailure = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), 1500);
  });
};

export const login = (email, password, shouldSucceed = true) => {
  console.log(email, password);

  if (!shouldSucceed) {
    return mockFailure({
      error: 500,
      message:
        "Veuillez vérifier votre email et mot de passe. Si cela ne fonctionne toujours pas, contactez notre support client.",
    });
  }

  return mockSuccess({ auth_token: "successful_fake_token" });
};

export const createAccount = (email, password, shouldSucceed = true) => {
  console.log(email, password);

  if (!shouldSucceed) {
    return mockFailure({
      error: 500,
      message: "Un compte existe déjà avec cet email.",
    });
  }

  return mockSuccess({ auth_token: "successful_fake_token" });
};

export const getBooks = async (shouldSucceed = true) => {
  const token = await getToken();

  if (token !== "successful_fake_token" || !shouldSucceed) {
    return mockFailure({ error: 401, message: "Invalid Request" });
  }

  return mockSuccess({
    books: [
      {
        id: 1,
        title: "Le Seigneur des anneaux - Intégrale",
        author: "lorem ipsum",
        stars: 10,
      },
      {
        id: 2,
        title: "Bilbo le Hobbit",
        author: "lorem ipsum",
        stars: 9,
      },
      {
        id: 3,
        title: "Le Petit Prince",
        author: "lorem ipsum",
        stars: 9,
      },
      {
        id: 4,
        title: "Harry Potter à l'école des sorciers",
        author: "lorem ipsum",
        stars: 8,
      },
      {
        id: 5,
        title: "Ils étaient dix",
        author: "lorem ipsum",
        stars: 7,
      },
      {
        id: 6,
        title: "Le rêve dans le pavillon rouge",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        id: 7,
        title: "Le Maître et Marguerite",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        id: 8,
        title: "Alice au pays des merveilles",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        id: 9,
        title: "Le Monde de Narnia, tome 2",
        author: "lorem ipsum",
        stars: 2,
      },
      {
        id: 10,
        title: "Les Aventures de Pinocchio",
        author: "lorem ipsum",
        stars: 0,
      },
    ],
  });
};

export const getLoans = async (shouldSucceed = true) => {
  const token = await getToken();

  if (token !== "successful_fake_token" || !shouldSucceed) {
    return mockFailure({ error: 401, message: "Invalid Request" });
  }

  return mockSuccess({
    loans: [
      {
        id: 1,
        title: "Le Seigneur des anneaux - Intégrale",
        author: "lorem ipsum",
        who: "François Dupont",
        from: "22/01/2022",
        to: "22/02/2022",
      },
      {
        id: 2,
        title: "Bilbo le Hobbit",
        author: "lorem ipsum",
        who: "Christophe Colomb",
        from: "11/01/2022",
        to: "27/02/2022",
      },
      {
        id: 3,
        title: "Le Petit Prince",
        author: "lorem ipsum",
        who: "Julien Sala",
        from: "23/02/2022",
        to: "23/04/2022",
      },
    ],
  });
};
