import { getToken } from "./token";

const mockSuccess = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
};

const mockFailure = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), 2000);
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
      },
      {
        title: "Bilbo le Hobbit",
      },
      {
        title: "Le Petit Prince",
      },
      {
        title: "Harry Potter à l'école des sorciers",
      },
      {
        title: "Ils étaient dix",
      },
      {
        title: "Le rêve dans le pavillon rouge",
      },
      {
        title: "Le Maître et Marguerite",
      },
      {
        title: "Les Aventures d'Alice au pays des merveilles",
      },
      {
        title:
          "Le Lion, la Sorcière blanche et l'Armoire magique - Le Monde de Narnia, tome 2",
      },
      {
        title: "Les Aventures de Pinocchio",
      },
    ],
  });
};
