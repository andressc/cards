import { IconProps, IconWrapper } from '../IconWrapper'

const LayersIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g clipPath={'url(#clip0_5661_2052)'}>
            <path
              d={
                'M3.24 7.29L11.76 11.92C11.8339 11.9594 11.9163 11.98 12 11.98C12.0837 11.98 12.1661 11.9594 12.24 11.92L20.76 7.29C20.8377 7.25161 20.9024 7.19111 20.9459 7.1161C20.9893 7.04109 21.0097 6.95491 21.0043 6.86837C20.999 6.78184 20.9682 6.69882 20.9158 6.62972C20.8635 6.56062 20.7919 6.50854 20.71 6.48L12.19 3C12.0683 2.94999 11.9317 2.94999 11.81 3L3.29 6.48C3.20813 6.50854 3.13652 6.56062 3.08415 6.62972C3.03179 6.69882 3.001 6.78184 2.99566 6.86837C2.99032 6.95491 3.01066 7.04109 3.05413 7.1161C3.0976 7.19111 3.16226 7.25161 3.24 7.29Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M20.71 10.66L18.88 9.88L12.24 13.49C12.1661 13.5294 12.0837 13.55 12 13.55C11.9163 13.55 11.8339 13.5294 11.76 13.49L5.12 9.88L3.29 10.66C3.2125 10.7007 3.1476 10.7618 3.10232 10.8367C3.05704 10.9116 3.0331 10.9975 3.0331 11.085C3.0331 11.1725 3.05704 11.2584 3.10232 11.3333C3.1476 11.4082 3.2125 11.4693 3.29 11.51L11.81 16.41C11.8823 16.4542 11.9653 16.4776 12.05 16.4776C12.1347 16.4776 12.2177 16.4542 12.29 16.41L20.81 11.51C20.8838 11.4609 20.9425 11.3923 20.9797 11.3119C21.0169 11.2315 21.0311 11.1423 21.0208 11.0543C21.0104 10.9663 20.9759 10.8829 20.9211 10.8133C20.8662 10.7437 20.7931 10.6906 20.71 10.66Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M20.71 15.1L19.15 14.42L12.24 18.18C12.1661 18.2194 12.0837 18.24 12 18.24C11.9163 18.24 11.8339 18.2194 11.76 18.18L4.85 14.42L3.29 15.1C3.2103 15.1413 3.14349 15.2037 3.09685 15.2805C3.05022 15.3572 3.02555 15.4452 3.02555 15.535C3.02555 15.6248 3.05022 15.7128 3.09685 15.7895C3.14349 15.8662 3.2103 15.9287 3.29 15.97L11.81 20.97C11.8839 21.0094 11.9663 21.03 12.05 21.03C12.1337 21.03 12.2161 21.0094 12.29 20.97L20.81 15.97C20.886 15.9202 20.9466 15.8503 20.9852 15.768C21.0237 15.6858 21.0387 15.5944 21.0283 15.5042C21.0179 15.4139 20.9827 15.3283 20.9265 15.2569C20.8702 15.1856 20.7953 15.1312 20.71 15.1Z'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'clip0_5661_2052'}>
              <rect fill={'white'} height={'24'} width={'24'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default LayersIcon
