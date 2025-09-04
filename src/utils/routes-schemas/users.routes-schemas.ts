export const RegisterUserSchema = {
  description: "Create a new user",
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string" },
      password: { type: "string" },
    },
    required: ["name", "email", "password"],
  },
  response: {
    201: {
      type: "object",
      properties: {
        message: { type: "string", default: "created user" },
      },
    },
    400: {
      type: "object",
      properties: {
        message: { type: "string", default: "missing required fields" },
      },
    },
    409: {
      type: "object",
      properties: {
        message: { type: "string", default: "email is already in use" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string", default: "internal server error" },
      },
    },
  },
};

export const LoginUserSchema = {
  description: "Login user data",
  body: {
    type: "object",
    properties: {
      email: { type: "string", format: "email" },
      password: { type: "string" },
    },
    required: ["email", "password"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        token: { type: "string" },
        user: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            email: { type: "string" },
            role: { type: "string" },
          },
        },
      },
    },
    400: {
      type: "object",
      properties: {
        message: { type: "string", default: "missing required fields" },
      },
    },
    401: {
      type: "object",
      properties: {
        message: { type: "string", default: "email or password invalid" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string", default: "internal server error" },
      },
    },
  },
};

export const GetUserSchema = {
  description: "Gets the authenticated user's data",
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        email: { type: "string" },
        role: { type: "string" },
        birthDate: { type: ["string", "null"], nullable: true },
        phone: { type: ["string", "null"], nullable: true },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
      },
    },
    401: {
      type: "object",
      properties: {
        message: { type: "string", default: "unauthenticated user" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string", default: "internal server error" },
      },
    },
  },
};

export const UpdateUserSchema = {
  description: "Update user data",
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string" },
      role: { type: "string" },
      birthDate: { type: "string", format: "date-time" },
      phone: { type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        message: { type: "string", default: "updated user" },
      },
    },
    401: {
      type: "object",
      properties: {
        message: { type: "string", default: "unauthenticated user" },
      },
    },
    409: {
      type: "object",
      properties: {
        message: { type: "string", default: "email already in use" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string", default: "internal server error" },
      },
    },
  },
};

export const DeleteUserSchema = {
  description: "Delete user account",
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        email: { type: "string" },
        role: { type: "string" },
        birthDate: { type: ["string", "null"], nullable: true },
        phone: { type: ["string", "null"], nullable: true },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
      },
    },
    401: {
      type: "object",
      properties: {
        message: { type: "string", default: "unauthenticated user" },
      },
    },
    500: {
      type: "object",
      properties: {
        message: { type: "string", default: "internal server error" },
      },
    },
  },
};
