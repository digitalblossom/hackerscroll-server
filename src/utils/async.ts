/*
  Sleeps for a given number of milliseconds.
*/
export async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
