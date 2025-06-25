import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  padding-top: 60px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 16px;
`;

const Required = styled.span`
  color: #e74c3c;
  margin-left: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 40px;
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const ContactText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ContactButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 0 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`;

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // 페이지 진입 시 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 실제 폼 제출 로직을 추가할 수 있습니다
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 3초 후 폼 초기화
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleCall = () => {
    window.location.href = 'tel:02-1234-5678';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@mo-reset.com';
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>문의사항</Title>
        <Subtitle>
          궁금한 점이나 상담이 필요하시면 언제든 연락주세요.<br />
          빠른 시일 내에 답변드리겠습니다.
        </Subtitle>

        <FormContainer>
          {isSubmitted && (
            <SuccessMessage>
              문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.
            </SuccessMessage>
          )}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                이름<Required>*</Required>
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                이메일<Required>*</Required>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>연락처</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="연락처를 입력해주세요"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                문의 유형<Required>*</Required>
              </Label>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">문의 유형을 선택해주세요</option>
                <option value="product">제품 문의</option>
                <option value="program">프로그램 문의</option>
                <option value="franchise">창업 문의</option>
                <option value="technical">기술 문의</option>
                <option value="other">기타</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                제목<Required>*</Required>
              </Label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="문의 제목을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                문의 내용<Required>*</Required>
              </Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 자세히 입력해주세요"
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitted}>
              {isSubmitted ? '접수 완료' : '문의하기'}
            </SubmitButton>
          </form>
        </FormContainer>

        <ContactInfo>
          <ContactTitle>빠른 연락</ContactTitle>
          <ContactText>
            급한 문의사항이 있으시면 전화나 이메일로 바로 연락주세요.
          </ContactText>
          <ContactButton onClick={handleCall}>
            전화 상담
          </ContactButton>
          <ContactButton onClick={handleEmail}>
            이메일 문의
          </ContactButton>
        </ContactInfo>
      </Content>
      <Footer />
    </Container>
  );
}; 

export default Inquiry;