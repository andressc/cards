import { IconProps, IconWrapper } from '../IconWrapper'

const FunnelOutlinedIcon = (allProps: IconProps) => {
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
          <g clipPath={'url(#clip0_52529_5231)'}>
            <path
              d={
                'M13.9 22C13.6836 22 13.4731 21.9298 13.3 21.8L9.3 18.75C9.17764 18.6558 9.07876 18.5346 9.01109 18.3958C8.94343 18.257 8.90883 18.1044 8.91 17.95V14.68L4.11 5.46C4.03095 5.30741 3.99255 5.13703 3.99852 4.96529C4.00449 4.79354 4.05461 4.62623 4.14406 4.4795C4.23351 4.33276 4.35926 4.21155 4.50918 4.12757C4.65911 4.04358 4.82815 3.99964 5 4H19C19.1735 4.00003 19.3441 4.04523 19.4949 4.13114C19.6457 4.21705 19.7715 4.34072 19.86 4.49C19.9478 4.64202 19.994 4.81447 19.994 4.99C19.994 5.16554 19.9478 5.33798 19.86 5.49L14.86 14.7V21C14.8613 21.1864 14.8105 21.3694 14.7133 21.5284C14.6161 21.6874 14.4764 21.8161 14.31 21.9C14.182 21.9621 14.0422 21.9962 13.9 22ZM10.9 17.46L12.9 18.99V14.44C12.8994 14.2876 12.9336 14.1371 13 14L17.3 6H6.64L10.77 14C10.8429 14.1423 10.8806 14.3001 10.88 14.46L10.9 17.46Z'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'clip0_52529_5231'}>
              <rect fill={'white'} height={'24'} width={'24'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default FunnelOutlinedIcon