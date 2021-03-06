import { spawn } from 'child_process';

export type Request = {
  cmd: string,
  argv: string
}

export type ResponseType = {
  result: string;
}

export const functionCommand = (cmd: string, argvs: string, cb: (err: string | undefined, 
  res: ResponseType | undefined) => void) => {

  const cmd_result = spawn(cmd, [argvs]);
  let result: string = '';

  cmd_result.on('error', (err) => {
  cb(err.message, undefined);
  });

  cmd_result.on('data', (data) => {
  result = data.toString();
  });

  const response: ResponseType = {
  result: result,
  };

cb(undefined, response);
};