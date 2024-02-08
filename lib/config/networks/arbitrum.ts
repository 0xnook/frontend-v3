import { GqlChain } from '@/lib/shared/services/api/generated/graphql'
import { NetworkConfig } from '../config.types'

const networkConfig: NetworkConfig = {
  chainId: 42161,
  name: 'Arbitrum One',
  shortName: 'Arbitrum',
  chain: GqlChain.Arbitrum,
  iconPath: '/images/chains/ARBITRUM.svg',
  blockExplorerBaseUrl: 'https://arbiscan.io',
  tokens: {
    nativeAsset: {
      name: 'Ether',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
    },
    defaultSwapTokens: {
      tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
  },
  contracts: {
    multicall2: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
    balancer: {
      vaultV2: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
      relayerV6: '0x35Cea9e57A393ac66Aaa7E25C391D52C74B5648f',
      minter: '0xc3ccacE87f6d3A81724075ADcb5ddd85a8A1bB68',
    },
  },
}

export default networkConfig
