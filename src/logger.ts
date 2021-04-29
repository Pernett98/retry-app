import * as C from 'fp-ts/lib/Console'
import * as L from 'logging-ts/lib/IO'

function showEntry(message: string): string {
  return `${message}`
}

function getLoggerEntry(prefix: string): L.LoggerIO<string> {
  return entry => C.log(`${prefix}: ${showEntry(entry)}`)
}

export const infoCircuitBraker = getLoggerEntry('circuitBreaker')

export const infoExponentialBackoff = getLoggerEntry('exponentialBackoff')