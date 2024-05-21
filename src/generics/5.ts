export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

type RoleDescription = Record<UserRole, string>;

const roleDescription: RoleDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log("🚀 ~ roleDescription:", roleDescription);
