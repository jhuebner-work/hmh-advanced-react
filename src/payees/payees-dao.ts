import { Payee } from './payee-types';

export interface DAOError {
  error: boolean;
  [key: string]: any;
}

export interface DAOOptions {
  searchRemote?: boolean;
  sortRemote?: boolean;
  rejectHttpErrors?: boolean;
} 

const defaultDAOOptions: DAOOptions = {
  searchRemote: false,  // TODO: Implement
  sortRemote: false,    // TODO: Implement
  rejectHttpErrors: false
} 

const baseUrl = 'http://localhost:8000/api/v1/banking/payees';

function fetchPayees(options: DAOOptions = {}): Promise<Payee[]> {

  return fetch(baseUrl)
    .then(response => handleResponse(response, {...defaultDAOOptions, ...options}))
    .catch(handleError);
}

function getPayeeById(id: string, options: DAOOptions = {}): Promise<Payee> {
  return fetch(`${baseUrl}/${id}`)
  .then(response => handleResponse(response, {...defaultDAOOptions, ...options}))
  .catch(handleError);
}

function handleError(error: any) {
  console.error('Problem in the DAO: ', error);
  return Promise.reject({
    error: true,
    message: 'Something went wrong in the DAO',
  });
}

function handleResponse(response: Response, options: DAOOptions) {
  if (options.rejectHttpErrors && !response.ok) {
    return Promise.reject({status: response.status, statusText: response.statusText, response});
  }

  return response.json();
}

const dao = {
  fetchPayees,
  getPayeeById
};

export default dao;
