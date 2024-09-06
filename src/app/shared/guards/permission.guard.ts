import { inject } from '@angular/core';

export const PermissionGuard = (permission: string | string[]) => {
  const permissionList = Array.isArray(permission) ? permission : [permission];

  return checkPermissions(permissionList);
};

const checkPermissions = (permissions: string[]): boolean => {
  let hasPermission = true;
  //TODO: permissions
  return hasPermission;
};