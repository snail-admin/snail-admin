import execa from 'execa'
import { createSpinner } from 'nanospinner'
import { resolve } from 'path'

const CWD = process.cwd()

export function createTask(cwd: any, command = 'build') {
  return () => execa('pnpm', [command], { cwd })
}

export async function runTask(taskName: string, task: any) {
  console.log(taskName, '====')
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    const start = performance.now()
    await task()
    s.success({ text: `Build ${taskName} completed! (${Math.ceil(performance.now() - start)}ms)` })
  } catch (e: any) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

export const buildLogin = createTask(resolve(CWD, './packages/snail-login'))
export const buildUse = createTask(resolve(CWD, './packages/snail-use'))

export const runTaskQueue = async () => {
  // await runTask('login', buildLogin)
  await runTask('use', buildUse)
}

