import type { Config } from 'jest'

export default async (): Promise<Config> => {
	return {
		verbose: true,
		preset: 'ts-jest',
		testEnvironment: 'jsdom',
		collectCoverage: true,
		modulePathIgnorePatterns: ['<rootDir>/dist/'],
	}
}
