import React from 'react';
export function logOut () {

        window.sessionStorage.removeItem('access');
        window.sessionStorage.removeItem('refresh');
   
};