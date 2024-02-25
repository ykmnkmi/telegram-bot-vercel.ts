import { VercelRequest, VercelResponse } from '@vercel/node';
import { startVercel } from '../src';

const handle = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  try {
    await startVercel(request, response);
  } catch (error: any) {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>');
    console.error(error.message);
  }
};

export default handle;
