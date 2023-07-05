import { api } from '@/lib/services/api/api.client'
import {
  GqlChain,
  GqlPoolFilterType,
  GqlPoolOrderBy,
  GqlPoolOrderDirection,
} from '@/lib/services/api/generated/types'
import Link from 'next/link'

export default async function Home() {
  const { poolGetPools: pools } = await api.GetPools({
    first: 10,
    orderBy: GqlPoolOrderBy.TotalLiquidity,
    orderDirection: GqlPoolOrderDirection.Desc,
    where: {
      chainNotIn: [GqlChain.Fantom, GqlChain.Optimism],
      poolTypeIn: [
        GqlPoolFilterType.Weighted,
        GqlPoolFilterType.Stable,
        GqlPoolFilterType.PhantomStable,
        GqlPoolFilterType.MetaStable,
      ],
    },
  })

  return (
    <main className="p-4">
      <ul>
        {pools.map(pool => (
          <li key={pool.id}>
            <Link href={`/pools/${pool.id}`}>{pool.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
