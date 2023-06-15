import { ReactNode, memo } from 'react';
import { ButtonText, Container } from './styles';

interface IconButtonProps {
  icon: ReactNode;
  text?: string | number;
  onPress?: () => void;
}

const IconButtonComponent: React.FC<IconButtonProps> = ({
  icon,
  text,
  onPress,
}) => (
  <Container onPress={onPress}>
    {icon}
    {text && <ButtonText>{text}</ButtonText>}
  </Container>
);

export default memo(IconButtonComponent);
