import { AliasType, stringType } from '../../../../interface'
import { $$transformPGValueIntoValue } from '../../transformPGValueIntoValue'

const pgDateType = new AliasType({
  name: 'date',
  description: 'The day, does not include a time.',
  baseType: stringType,
})

export default pgDateType
