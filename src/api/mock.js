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
        title: "Le Seigneur des anneaux - Intégrale",
        author: "lorem ipsum",
        stars: 10,
      },
      {
        title: "Bilbo le Hobbit",
        author: "lorem ipsum",
        stars: 9,
      },
      {
        title: "Le Petit Prince",
        author: "lorem ipsum",
        stars: 9,
      },
      {
        title: "Harry Potter à l'école des sorciers",
        author: "lorem ipsum",
        stars: 8,
      },
      {
        title: "Ils étaient dix",
        author: "lorem ipsum",
        stars: 7,
      },
      {
        title: "Le rêve dans le pavillon rouge",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        title: "Le Maître et Marguerite",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        title: "Les Aventures d'Alice au pays des merveilles",
        author: "lorem ipsum",
        stars: 6,
      },
      {
        title:
          "Le Lion, la Sorcière blanche et l'Armoire magique - Le Monde de Narnia, tome 2",
        author: "lorem ipsum",
        stars: 2,
      },
      {
        title: "Les Aventures de Pinocchio",
        author: "lorem ipsum",
        stars: 0,
      },
    ],
  });
};
