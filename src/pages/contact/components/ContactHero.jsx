import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%231E40AF%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>Ready to Transform Your Marketing?</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Start Your
            <span className="text-gradient block">Growth Journey</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're looking to scale your current marketing efforts or completely transform your digital presence, our team of strategic experts is ready to architect your success. Let's discuss how we can accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-success">
              <Icon name="Clock" size={20} />
              <span className="font-medium">24-hour response guarantee</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2 text-success">
              <Icon name="Shield" size={20} />
              <span className="font-medium">Confidential consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2 text-success">
              <Icon name="Users" size={20} />
              <span className="font-medium">Strategic team matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;