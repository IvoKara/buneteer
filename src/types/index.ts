const statuses = ['started', 'loading', 'done'] as const

export type Status = typeof statuses[number]
